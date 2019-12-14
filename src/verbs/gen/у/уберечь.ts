import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уберечь: PerfectVerb = {
  name: Word('уберечь', 4),
  singular1stPerson: Word('уберегу', 6),
  singular2ndPerson: Word('убережёшь', 2),
  singular3rdPerson: Word('убережёт', 2),
  plural1stPerson: Word('убережём', 2),
  plural2ndPerson: Word('убережёте', 2),
  plural3rdPerson: Word('уберегут', 6),
  masculinePast: Word('уберёг', 2),
  femininePast: Word('уберегла', 7),
  neuterPast: Word('уберегло', 7),
  pluralPast: Word('уберегли', 7),
  imperativeInformal: Word('убереги', 6),
  imperativeFormal: Word('уберегите', 6),
  imperfect: [],
};

perfectVerbs.set(уберечь.name.text, уберечь);

export { уберечь };