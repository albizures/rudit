import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const допрыгаться: PerfectVerb = {
  name: Word('допрыгаться', 4),
  singular1stPerson: Word('допрыгаюсь', 4),
  singular2ndPerson: Word('допрыгаешься', 4),
  singular3rdPerson: Word('допрыгается', 4),
  plural1stPerson: Word('допрыгаемся', 4),
  plural2ndPerson: Word('допрыгаетесь', 4),
  plural3rdPerson: Word('допрыгаются', 4),
  masculinePast: Word('допрыгался', 4),
  femininePast: Word('допрыгалась', 4),
  neuterPast: Word('допрыгалось', 4),
  pluralPast: Word('допрыгались', 4),
  imperativeInformal: Word('допрыгайся', 4),
  imperativeFormal: Word('допрыгайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(допрыгаться.name.text, допрыгаться);

export { допрыгаться };