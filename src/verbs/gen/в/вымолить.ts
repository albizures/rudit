import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымолить: PerfectVerb = {
  name: Word('вымолить', 1),
  singular1stPerson: Word('вымолю', 1),
  singular2ndPerson: Word('вымолишь', 1),
  singular3rdPerson: Word('вымолит', 1),
  plural1stPerson: Word('вымолим', 1),
  plural2ndPerson: Word('вымолите', 1),
  plural3rdPerson: Word('вымолят', 1),
  masculinePast: Word('вымолил', 1),
  femininePast: Word('вымолила', 1),
  neuterPast: Word('вымолило', 1),
  pluralPast: Word('вымолили', 1),
  imperativeInformal: Word('вымоли', 1),
  imperativeFormal: Word('вымолите', 1),
  imperfect: [],
};

perfectVerbs.set(вымолить.name.text, вымолить);

export { вымолить };