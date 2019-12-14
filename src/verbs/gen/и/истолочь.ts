import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истолочь: PerfectVerb = {
  name: Word('истолочь', 5),
  singular1stPerson: Word('истолку', 6),
  singular2ndPerson: Word('истолкёшь', 6),
  singular3rdPerson: Word('истолкёт', 6),
  plural1stPerson: Word('истолкём', 6),
  plural2ndPerson: Word('истолкёте', 6),
  plural3rdPerson: Word('истолкут', 6),
  masculinePast: Word('истолок', 5),
  femininePast: Word('истолкла', 7),
  neuterPast: Word('истолкло', 7),
  pluralPast: Word('истолкли', 7),
  imperativeInformal: Word('истолки', 6),
  imperativeFormal: Word('истолките', 6),
  imperfect: [],
};

perfectVerbs.set(истолочь.name.text, истолочь);

export { истолочь };