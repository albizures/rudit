import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отнести: PerfectVerb = {
  name: Word('отнести', 6),
  singular1stPerson: Word('отнесу', 5),
  singular2ndPerson: Word('отнесёшь', 3),
  singular3rdPerson: Word('отнесёт', 3),
  plural1stPerson: Word('отнесём', 3),
  plural2ndPerson: Word('отнесёте', 3),
  plural3rdPerson: Word('отнесут', 5),
  masculinePast: Word('отнёс', 0),
  femininePast: Word('отнесла', 6),
  neuterPast: Word('отнесло', 6),
  pluralPast: Word('отнесли', 6),
  imperativeInformal: Word('отнеси', 5),
  imperativeFormal: Word('отнесите', 5),
  imperfect: ['относить'],
};

perfectVerbs.set(отнести.name.text, отнести);

export { отнести };