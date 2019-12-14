import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брызгаться: PerfectVerb = {
  name: Word('брызгаться', 2),
  singular1stPerson: Word('брызгаюсь', 2),
  singular2ndPerson: Word('брызгаешься', 2),
  singular3rdPerson: Word('брызгается', 2),
  plural1stPerson: Word('брызгаемся', 2),
  plural2ndPerson: Word('брызгаетесь', 2),
  plural3rdPerson: Word('брызгаются', 2),
  masculinePast: Word('брызгался', 2),
  femininePast: Word('брызгалась', 2),
  neuterPast: Word('брызгалось', 2),
  pluralPast: Word('брызгались', 2),
  imperativeInformal: Word('брызгайся', 2),
  imperativeFormal: Word('брызгайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(брызгаться.name.text, брызгаться);

export { брызгаться };