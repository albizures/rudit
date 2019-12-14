import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откликаться: PerfectVerb = {
  name: Word('откликаться', 6),
  singular1stPerson: Word('откликаюсь', 6),
  singular2ndPerson: Word('откликаешься', 6),
  singular3rdPerson: Word('откликается', 6),
  plural1stPerson: Word('откликаемся', 6),
  plural2ndPerson: Word('откликаетесь', 6),
  plural3rdPerson: Word('откликаются', 6),
  masculinePast: Word('откликался', 6),
  femininePast: Word('откликалась', 6),
  neuterPast: Word('откликалось', 6),
  pluralPast: Word('откликались', 6),
  imperativeInformal: Word('откликайся', 6),
  imperativeFormal: Word('откликайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(откликаться.name.text, откликаться);

export { откликаться };