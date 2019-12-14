import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привнести: PerfectVerb = {
  name: Word('привнести', 8),
  singular1stPerson: Word('привнесу', 7),
  singular2ndPerson: Word('привнесёшь', 7),
  singular3rdPerson: Word('привнесёт', 7),
  plural1stPerson: Word('привнесём', 7),
  plural2ndPerson: Word('привнесёте', 7),
  plural3rdPerson: Word('привнесут', 7),
  masculinePast: Word('привнёс', 5),
  femininePast: Word('привнесла', 8),
  neuterPast: Word('привнесло', 8),
  pluralPast: Word('привнесли', 8),
  imperativeInformal: Word('привнеси', 7),
  imperativeFormal: Word('привнесите', 7),
  imperfect: [],
};

perfectVerbs.set(привнести.name.text, привнести);

export { привнести };