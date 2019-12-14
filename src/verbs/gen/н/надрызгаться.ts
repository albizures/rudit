import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надрызгаться: PerfectVerb = {
  name: Word('надрызгаться', 4),
  singular1stPerson: Word('надрызгаюсь', 4),
  singular2ndPerson: Word('надрызгаешься', 4),
  singular3rdPerson: Word('надрызгается', 4),
  plural1stPerson: Word('надрызгаемся', 4),
  plural2ndPerson: Word('надрызгаетесь', 4),
  plural3rdPerson: Word('надрызгаются', 4),
  masculinePast: Word('надрызгался', 4),
  femininePast: Word('надрызгалась', 4),
  neuterPast: Word('надрызгалось', 4),
  pluralPast: Word('надрызгались', 4),
  imperativeInformal: Word('надрызгайся', 4),
  imperativeFormal: Word('надрызгайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(надрызгаться.name.text, надрызгаться);

export { надрызгаться };