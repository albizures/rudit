import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const громоздить: PerfectVerb = {
  name: Word('громоздить', 7),
  singular1stPerson: Word('громозжу', 7),
  singular2ndPerson: Word('громоздишь', 7),
  singular3rdPerson: Word('громоздит', 7),
  plural1stPerson: Word('громоздим', 7),
  plural2ndPerson: Word('громоздите', 7),
  plural3rdPerson: Word('громоздят', 7),
  masculinePast: Word('громоздил', 7),
  femininePast: Word('громоздила', 7),
  neuterPast: Word('громоздило', 7),
  pluralPast: Word('громоздили', 7),
  imperativeInformal: Word('громозди', 7),
  imperativeFormal: Word('громоздите', 7),
  imperfect: [],
};

perfectVerbs.set(громоздить.name.text, громоздить);

export { громоздить };