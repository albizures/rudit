import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const терять: PerfectVerb = {
  name: Word('терять', 3),
  singular1stPerson: Word('теряю', 3),
  singular2ndPerson: Word('теряешь', 3),
  singular3rdPerson: Word('теряет', 3),
  plural1stPerson: Word('теряем', 3),
  plural2ndPerson: Word('теряете', 3),
  plural3rdPerson: Word('теряют', 3),
  masculinePast: Word('терял', 3),
  femininePast: Word('теряла', 3),
  neuterPast: Word('теряло', 3),
  pluralPast: Word('теряли', 3),
  imperativeInformal: Word('теряй', 3),
  imperativeFormal: Word('теряйте', 3),
  imperfect: ['потерять'],
};

perfectVerbs.set(терять.name.text, терять);

export { терять };