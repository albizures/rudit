import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сберечь: PerfectVerb = {
  name: Word('сберечь', 4),
  singular1stPerson: Word('сберегу', 6),
  singular2ndPerson: Word('сбережёшь', 2),
  singular3rdPerson: Word('сбережёт', 2),
  plural1stPerson: Word('сбережём', 2),
  plural2ndPerson: Word('сбережёте', 2),
  plural3rdPerson: Word('сберегут', 6),
  masculinePast: Word('сберёг', 2),
  femininePast: Word('сберегла', 7),
  neuterPast: Word('сберегло', 7),
  pluralPast: Word('сберегли', 7),
  imperativeInformal: Word('сбереги', 6),
  imperativeFormal: Word('сберегите', 6),
  imperfect: [],
};

perfectVerbs.set(сберечь.name.text, сберечь);

export { сберечь };