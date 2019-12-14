import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const претворять: PerfectVerb = {
  name: Word('претворять', 7),
  singular1stPerson: Word('претворяю', 7),
  singular2ndPerson: Word('претворяешь', 7),
  singular3rdPerson: Word('претворяет', 7),
  plural1stPerson: Word('претворяем', 7),
  plural2ndPerson: Word('претворяете', 7),
  plural3rdPerson: Word('претворяют', 7),
  masculinePast: Word('претворял', 7),
  femininePast: Word('претворяла', 7),
  neuterPast: Word('претворяло', 7),
  pluralPast: Word('претворяли', 7),
  imperativeInformal: Word('претворяй', 7),
  imperativeFormal: Word('претворяйте', 7),
  imperfect: [],
};

perfectVerbs.set(претворять.name.text, претворять);

export { претворять };