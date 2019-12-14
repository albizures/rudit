import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ободрять: PerfectVerb = {
  name: Word('ободрять', 5),
  singular1stPerson: Word('ободряю', 5),
  singular2ndPerson: Word('ободряешь', 5),
  singular3rdPerson: Word('ободряет', 5),
  plural1stPerson: Word('ободряем', 5),
  plural2ndPerson: Word('ободряете', 5),
  plural3rdPerson: Word('ободряют', 5),
  masculinePast: Word('ободрял', 5),
  femininePast: Word('ободряла', 5),
  neuterPast: Word('ободряло', 5),
  pluralPast: Word('ободряли', 5),
  imperativeInformal: Word('ободряй', 5),
  imperativeFormal: Word('ободряйте', 5),
  imperfect: [],
};

perfectVerbs.set(ободрять.name.text, ободрять);

export { ободрять };