import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заругаться: PerfectVerb = {
  name: Word('заругаться', 5),
  singular1stPerson: Word('заругаюсь', 5),
  singular2ndPerson: Word('заругаешься', 5),
  singular3rdPerson: Word('заругается', 5),
  plural1stPerson: Word('заругаемся', 5),
  plural2ndPerson: Word('заругаетесь', 5),
  plural3rdPerson: Word('заругаются', 5),
  masculinePast: Word('заругался', 5),
  femininePast: Word('заругалась', 5),
  neuterPast: Word('заругалось', 5),
  pluralPast: Word('заругались', 5),
  imperativeInformal: Word('заругайся', 5),
  imperativeFormal: Word('заругайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(заругаться.name.text, заругаться);

export { заругаться };