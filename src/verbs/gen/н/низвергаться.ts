import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const низвергаться: PerfectVerb = {
  name: Word('низвергаться', 7),
  singular1stPerson: Word('низвергаюсь', 7),
  singular2ndPerson: Word('низвергаешься', 7),
  singular3rdPerson: Word('низвергается', 7),
  plural1stPerson: Word('низвергаемся', 7),
  plural2ndPerson: Word('низвергаетесь', 7),
  plural3rdPerson: Word('низвергаются', 7),
  masculinePast: Word('низвергался', 7),
  femininePast: Word('низвергалась', 7),
  neuterPast: Word('низвергалось', 7),
  pluralPast: Word('низвергались', 7),
  imperativeInformal: Word('низвергайся', 7),
  imperativeFormal: Word('низвергайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(низвергаться.name.text, низвергаться);

export { низвергаться };