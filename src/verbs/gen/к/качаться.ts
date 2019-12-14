import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const качаться: PerfectVerb = {
  name: Word('качаться', 3),
  singular1stPerson: Word('качаюсь', 3),
  singular2ndPerson: Word('качаешься', 3),
  singular3rdPerson: Word('качается', 3),
  plural1stPerson: Word('качаемся', 3),
  plural2ndPerson: Word('качаетесь', 3),
  plural3rdPerson: Word('качаются', 3),
  masculinePast: Word('качался', 3),
  femininePast: Word('качалась', 3),
  neuterPast: Word('качалось', 3),
  pluralPast: Word('качались', 3),
  imperativeInformal: Word('качайся', 3),
  imperativeFormal: Word('качайтесь', 3),
  imperfect: ['качнуться'],
};

perfectVerbs.set(качаться.name.text, качаться);

export { качаться };