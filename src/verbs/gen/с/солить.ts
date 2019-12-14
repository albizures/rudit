import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const солить: PerfectVerb = {
  name: Word('солить', 3),
  singular1stPerson: Word('солю', 3),
  singular2ndPerson: Word('солишь', 1),
  singular3rdPerson: Word('солит', 1),
  plural1stPerson: Word('солим', 1),
  plural2ndPerson: Word('солите', 1),
  plural3rdPerson: Word('солят', 1),
  masculinePast: Word('солил', 3),
  femininePast: Word('солила', 3),
  neuterPast: Word('солило', 3),
  pluralPast: Word('солили', 3),
  imperativeInformal: Word('соли', 3),
  imperativeFormal: Word('солите', 3),
  imperfect: [],
};

perfectVerbs.set(солить.name.text, солить);

export { солить };