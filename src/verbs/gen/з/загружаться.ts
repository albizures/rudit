import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загружаться: PerfectVerb = {
  name: Word('загружаться', 6),
  singular1stPerson: Word('загружаюсь', 6),
  singular2ndPerson: Word('загружаешься', 6),
  singular3rdPerson: Word('загружается', 6),
  plural1stPerson: Word('загружаемся', 6),
  plural2ndPerson: Word('загружаетесь', 6),
  plural3rdPerson: Word('загружаются', 6),
  masculinePast: Word('загружался', 6),
  femininePast: Word('загружалась', 6),
  neuterPast: Word('загружалось', 6),
  pluralPast: Word('загружались', 6),
  imperativeInformal: Word('загружайся', 6),
  imperativeFormal: Word('загружайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(загружаться.name.text, загружаться);

export { загружаться };