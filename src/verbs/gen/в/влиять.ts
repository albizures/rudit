import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const влиять: PerfectVerb = {
  name: Word('влиять', 3),
  singular1stPerson: Word('влияю', 3),
  singular2ndPerson: Word('влияешь', 3),
  singular3rdPerson: Word('влияет', 3),
  plural1stPerson: Word('влияем', 3),
  plural2ndPerson: Word('влияете', 3),
  plural3rdPerson: Word('влияют', 3),
  masculinePast: Word('влиял', 3),
  femininePast: Word('влияла', 3),
  neuterPast: Word('влияло', 3),
  pluralPast: Word('влияли', 3),
  imperativeInformal: Word('влияй', 3),
  imperativeFormal: Word('влияйте', 3),
  imperfect: ['повлиять'],
};

perfectVerbs.set(влиять.name.text, влиять);

export { влиять };