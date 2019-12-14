import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const околдовывать: PerfectVerb = {
  name: Word('околдовывать', 5),
  singular1stPerson: Word('околдовываю', 5),
  singular2ndPerson: Word('околдовываешь', 5),
  singular3rdPerson: Word('околдовывает', 5),
  plural1stPerson: Word('околдовываем', 5),
  plural2ndPerson: Word('околдовываете', 5),
  plural3rdPerson: Word('околдовывают', 5),
  masculinePast: Word('околдовывал', 5),
  femininePast: Word('околдовывала', 5),
  neuterPast: Word('околдовывало', 5),
  pluralPast: Word('околдовывали', 5),
  imperativeInformal: Word('околдовывай', 5),
  imperativeFormal: Word('околдовывайте', 5),
  imperfect: [],
};

perfectVerbs.set(околдовывать.name.text, околдовывать);

export { околдовывать };