import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтверждаться: PerfectVerb = {
  name: Word('подтверждаться', 9),
  singular1stPerson: Word('подтверждаюсь', 9),
  singular2ndPerson: Word('подтверждаешься', 9),
  singular3rdPerson: Word('подтверждается', 9),
  plural1stPerson: Word('подтверждаемся', 9),
  plural2ndPerson: Word('подтверждаетесь', 9),
  plural3rdPerson: Word('подтверждаются', 9),
  masculinePast: Word('подтверждался', 9),
  femininePast: Word('подтверждалась', 9),
  neuterPast: Word('подтверждалось', 9),
  pluralPast: Word('подтверждались', 9),
  imperativeInformal: Word('подтверждайся', 9),
  imperativeFormal: Word('подтверждайтесь', 9),
  imperfect: [],
};

perfectVerbs.set(подтверждаться.name.text, подтверждаться);

export { подтверждаться };