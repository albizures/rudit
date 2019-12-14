import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проводить: PerfectVerb = {
  name: Word('проводить', 6),
  singular1stPerson: Word('провожу', 6),
  singular2ndPerson: Word('проводишь', 4),
  singular3rdPerson: Word('проводит', 4),
  plural1stPerson: Word('проводим', 4),
  plural2ndPerson: Word('проводите', 4),
  plural3rdPerson: Word('проводят', 4),
  masculinePast: Word('проводил', 6),
  femininePast: Word('проводила', 6),
  neuterPast: Word('проводило', 6),
  pluralPast: Word('проводили', 6),
  imperativeInformal: Word('проводи', 6),
  imperativeFormal: Word('проводите', 6),
  imperfect: ['провести'],
};

perfectVerbs.set(проводить.name.text, проводить);

export { проводить };