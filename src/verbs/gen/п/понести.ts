import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понести: PerfectVerb = {
  name: Word('понести', 6),
  singular1stPerson: Word('понесу', 5),
  singular2ndPerson: Word('понесёшь', 3),
  singular3rdPerson: Word('понесёт', 3),
  plural1stPerson: Word('понесём', 3),
  plural2ndPerson: Word('понесёте', 3),
  plural3rdPerson: Word('понесут', 5),
  masculinePast: Word('понёс', 1),
  femininePast: Word('понесла', 6),
  neuterPast: Word('понесло', 6),
  pluralPast: Word('понесли', 6),
  imperativeInformal: Word('понеси', 5),
  imperativeFormal: Word('понесите', 5),
  imperfect: [],
};

perfectVerbs.set(понести.name.text, понести);

export { понести };