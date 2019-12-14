import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растолочь: PerfectVerb = {
  name: Word('растолочь', 6),
  singular1stPerson: Word('растолку', 7),
  singular2ndPerson: Word('растолчёшь', 7),
  singular3rdPerson: Word('растолчёт', 7),
  plural1stPerson: Word('растолчём', 7),
  plural2ndPerson: Word('растолчёте', 7),
  plural3rdPerson: Word('растолкут', 7),
  masculinePast: Word('растолок', 6),
  femininePast: Word('растолкла', 8),
  neuterPast: Word('растолкло', 8),
  pluralPast: Word('растолкли', 8),
  imperativeInformal: Word('растолки', 7),
  imperativeFormal: Word('растолките', 7),
  imperfect: [],
};

perfectVerbs.set(растолочь.name.text, растолочь);

export { растолочь };