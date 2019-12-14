import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отнести: PerfectVerb = {
  name: Word('отнести', 6),
  singular1stPerson: Word('отнесу', 5),
  singular2ndPerson: Word('отнесёшь', 5),
  singular3rdPerson: Word('отнесёт', 5),
  plural1stPerson: Word('отнесём', 5),
  plural2ndPerson: Word('отнесёте', 5),
  plural3rdPerson: Word('отнесут', 5),
  masculinePast: Word('отнёс', 3),
  femininePast: Word('отнесла', 6),
  neuterPast: Word('отнесло', 6),
  pluralPast: Word('отнесли', 6),
  imperativeInformal: Word('отнеси', 5),
  imperativeFormal: Word('отнесите', 5),
  imperfect: ['относить'],
};

perfectVerbs.set(отнести.name.text, отнести);

export { отнести };