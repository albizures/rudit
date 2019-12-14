import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прощаться: PerfectVerb = {
  name: Word('прощаться', 4),
  singular1stPerson: Word('прощаюсь', 4),
  singular2ndPerson: Word('прощаешься', 4),
  singular3rdPerson: Word('прощается', 4),
  plural1stPerson: Word('прощаемся', 4),
  plural2ndPerson: Word('прощаетесь', 4),
  plural3rdPerson: Word('прощаются', 4),
  masculinePast: Word('прощался', 4),
  femininePast: Word('прощалась', 4),
  neuterPast: Word('прощалось', 4),
  pluralPast: Word('прощались', 4),
  imperativeInformal: Word('прощайся', 4),
  imperativeFormal: Word('прощайтесь', 4),
  imperfect: ['попрощаться','проститься'],
};

perfectVerbs.set(прощаться.name.text, прощаться);

export { прощаться };