import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поберечь: PerfectVerb = {
  name: Word('поберечь', 5),
  singular1stPerson: Word('поберегу', 7),
  singular2ndPerson: Word('побережёшь', 3),
  singular3rdPerson: Word('побережёт', 3),
  plural1stPerson: Word('побережём', 3),
  plural2ndPerson: Word('побережёте', 3),
  plural3rdPerson: Word('поберегут', 7),
  masculinePast: Word('поберёг', 3),
  femininePast: Word('поберегла', 8),
  neuterPast: Word('поберегло', 8),
  pluralPast: Word('поберегли', 8),
  imperativeInformal: Word('побереги', 7),
  imperativeFormal: Word('поберегите', 7),
  imperfect: [],
};

perfectVerbs.set(поберечь.name.text, поберечь);

export { поберечь };