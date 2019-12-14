import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ругаться: PerfectVerb = {
  name: Word('ругаться', 3),
  singular1stPerson: Word('ругаюсь', 3),
  singular2ndPerson: Word('ругаешься', 3),
  singular3rdPerson: Word('ругается', 3),
  plural1stPerson: Word('ругаемся', 3),
  plural2ndPerson: Word('ругаетесь', 3),
  plural3rdPerson: Word('ругаются', 3),
  masculinePast: Word('ругался', 3),
  femininePast: Word('ругалась', 3),
  neuterPast: Word('ругалось', 3),
  pluralPast: Word('ругались', 3),
  imperativeInformal: Word('ругайся', 3),
  imperativeFormal: Word('ругайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(ругаться.name.text, ругаться);

export { ругаться };