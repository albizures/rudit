import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восторгаться: PerfectVerb = {
  name: Word('восторгаться', 7),
  singular1stPerson: Word('восторгаюсь', 7),
  singular2ndPerson: Word('восторгаешься', 7),
  singular3rdPerson: Word('восторгается', 7),
  plural1stPerson: Word('восторгаемся', 7),
  plural2ndPerson: Word('восторгаетесь', 7),
  plural3rdPerson: Word('восторгаются', 7),
  masculinePast: Word('восторгался', 7),
  femininePast: Word('восторгалась', 7),
  neuterPast: Word('восторгалось', 7),
  pluralPast: Word('восторгались', 7),
  imperativeInformal: Word('восторгайся', 7),
  imperativeFormal: Word('восторгайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(восторгаться.name.text, восторгаться);

export { восторгаться };