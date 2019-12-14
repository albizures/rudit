import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прицеливаться: PerfectVerb = {
  name: Word('прицеливаться', 4),
  singular1stPerson: Word('прицеливаюсь', 4),
  singular2ndPerson: Word('прицеливаешься', 4),
  singular3rdPerson: Word('прицеливается', 4),
  plural1stPerson: Word('прицеливаемся', 4),
  plural2ndPerson: Word('прицеливаетесь', 4),
  plural3rdPerson: Word('прицеливаются', 4),
  masculinePast: Word('прицеливался', 4),
  femininePast: Word('прицеливалась', 4),
  neuterPast: Word('прицеливалось', 4),
  pluralPast: Word('прицеливались', 4),
  imperativeInformal: Word('прицеливайся', 4),
  imperativeFormal: Word('прицеливайтесь', 4),
  imperfect: ['прицелиться'],
};

perfectVerbs.set(прицеливаться.name.text, прицеливаться);

export { прицеливаться };