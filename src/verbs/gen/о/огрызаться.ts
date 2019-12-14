import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const огрызаться: PerfectVerb = {
  name: Word('огрызаться', 5),
  singular1stPerson: Word('огрызаюсь', 5),
  singular2ndPerson: Word('огрызаешься', 5),
  singular3rdPerson: Word('огрызается', 5),
  plural1stPerson: Word('огрызаемся', 5),
  plural2ndPerson: Word('огрызаетесь', 5),
  plural3rdPerson: Word('огрызаются', 5),
  masculinePast: Word('огрызался', 5),
  femininePast: Word('огрызалась', 5),
  neuterPast: Word('огрызалось', 5),
  pluralPast: Word('огрызались', 5),
  imperativeInformal: Word('огрызайся', 5),
  imperativeFormal: Word('огрызайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(огрызаться.name.text, огрызаться);

export { огрызаться };