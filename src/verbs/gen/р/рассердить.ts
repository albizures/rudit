import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассердить: PerfectVerb = {
  name: Word('рассердить', 7),
  singular1stPerson: Word('рассержу', 7),
  singular2ndPerson: Word('рассердишь', 4),
  singular3rdPerson: Word('рассердит', 4),
  plural1stPerson: Word('рассердим', 4),
  plural2ndPerson: Word('рассердите', 4),
  plural3rdPerson: Word('рассердят', 4),
  masculinePast: Word('рассердил', 7),
  femininePast: Word('рассердила', 7),
  neuterPast: Word('рассердило', 7),
  pluralPast: Word('рассердили', 7),
  imperativeInformal: Word('рассерди', 7),
  imperativeFormal: Word('рассердите', 7),
  imperfect: ['сердить'],
};

perfectVerbs.set(рассердить.name.text, рассердить);

export { рассердить };