import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усеять: PerfectVerb = {
  name: Word('усеять', 2),
  singular1stPerson: Word('усею', 2),
  singular2ndPerson: Word('усеешь', 2),
  singular3rdPerson: Word('усеет', 2),
  plural1stPerson: Word('усеем', 2),
  plural2ndPerson: Word('усеете', 2),
  plural3rdPerson: Word('усеют', 2),
  masculinePast: Word('усеял', 2),
  femininePast: Word('усеяла', 2),
  neuterPast: Word('усеяло', 2),
  pluralPast: Word('усеяли', 2),
  imperativeInformal: Word('усей', 2),
  imperativeFormal: Word('усейте', 2),
  imperfect: [],
};

perfectVerbs.set(усеять.name.text, усеять);

export { усеять };