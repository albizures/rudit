import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поберечь: PerfectVerb = {
  name: Word('поберечь', 5),
  singular1stPerson: Word('поберегу', 7),
  singular2ndPerson: Word('побережёшь', 7),
  singular3rdPerson: Word('побережёт', 7),
  plural1stPerson: Word('побережём', 7),
  plural2ndPerson: Word('побережёте', 7),
  plural3rdPerson: Word('поберегут', 7),
  masculinePast: Word('поберёг', 5),
  femininePast: Word('поберегла', 8),
  neuterPast: Word('поберегло', 8),
  pluralPast: Word('поберегли', 8),
  imperativeInformal: Word('побереги', 7),
  imperativeFormal: Word('поберегите', 7),
  imperfect: [],
};

perfectVerbs.set(поберечь.name.text, поберечь);

export { поберечь };