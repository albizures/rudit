import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const извергаться: PerfectVerb = {
  name: Word('извергаться', 6),
  singular1stPerson: Word('извергаюсь', 6),
  singular2ndPerson: Word('извергаешься', 6),
  singular3rdPerson: Word('извергается', 6),
  plural1stPerson: Word('извергаемся', 6),
  plural2ndPerson: Word('извергаетесь', 6),
  plural3rdPerson: Word('извергаются', 6),
  masculinePast: Word('извергался', 6),
  femininePast: Word('извергалась', 6),
  neuterPast: Word('извергалось', 6),
  pluralPast: Word('извергались', 6),
  imperativeInformal: Word('извергайся', 6),
  imperativeFormal: Word('извергайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(извергаться.name.text, извергаться);

export { извергаться };