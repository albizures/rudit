import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const считаться: PerfectVerb = {
  name: Word('считаться', 4),
  singular1stPerson: Word('считаюсь', 4),
  singular2ndPerson: Word('считаешься', 4),
  singular3rdPerson: Word('считается', 4),
  plural1stPerson: Word('считаемся', 4),
  plural2ndPerson: Word('считаетесь', 4),
  plural3rdPerson: Word('считаются', 4),
  masculinePast: Word('считался', 4),
  femininePast: Word('считалась', 4),
  neuterPast: Word('считалось', 4),
  pluralPast: Word('считались', 4),
  imperativeInformal: Word('считайся', 4),
  imperativeFormal: Word('считайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(считаться.name.text, считаться);

export { считаться };