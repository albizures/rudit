import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задвигать: PerfectVerb = {
  name: Word('задвигать', 6),
  singular1stPerson: Word('', -1),
  singular2ndPerson: Word('', -1),
  singular3rdPerson: Word('', -1),
  plural1stPerson: Word('', -1),
  plural2ndPerson: Word('', -1),
  plural3rdPerson: Word('', -1),
  masculinePast: Word('', -1),
  femininePast: Word('', -1),
  neuterPast: Word('', -1),
  pluralPast: Word('', -1),
  imperativeInformal: Word('', -1),
  imperativeFormal: Word('', -1),
  imperfect: ['задвинуть'],
};

perfectVerbs.set(задвигать.name.text, задвигать);

export { задвигать };