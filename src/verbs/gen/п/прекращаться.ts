import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прекращаться: PerfectVerb = {
  name: Word('прекращаться', 7),
  singular1stPerson: Word('прекращаюсь', 7),
  singular2ndPerson: Word('прекращаешься', 7),
  singular3rdPerson: Word('прекращается', 7),
  plural1stPerson: Word('прекращаемся', 7),
  plural2ndPerson: Word('прекращаетесь', 7),
  plural3rdPerson: Word('прекращаются', 7),
  masculinePast: Word('прекращался', 7),
  femininePast: Word('прекращалась', 7),
  neuterPast: Word('прекращалось', 7),
  pluralPast: Word('прекращались', 7),
  imperativeInformal: Word('прекращайся', 7),
  imperativeFormal: Word('прекращайтесь', 7),
  imperfect: ['прекратиться'],
};

perfectVerbs.set(прекращаться.name.text, прекращаться);

export { прекращаться };