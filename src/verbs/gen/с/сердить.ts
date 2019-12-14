import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сердить: PerfectVerb = {
  name: Word('сердить', 4),
  singular1stPerson: Word('сержу', 4),
  singular2ndPerson: Word('сердишь', 1),
  singular3rdPerson: Word('сердит', 1),
  plural1stPerson: Word('сердим', 1),
  plural2ndPerson: Word('сердите', 1),
  plural3rdPerson: Word('сердят', 1),
  masculinePast: Word('сердил', 4),
  femininePast: Word('сердила', 4),
  neuterPast: Word('сердило', 4),
  pluralPast: Word('сердили', 4),
  imperativeInformal: Word('серди', 4),
  imperativeFormal: Word('сердите', 4),
  imperfect: ['рассердить'],
};

perfectVerbs.set(сердить.name.text, сердить);

export { сердить };