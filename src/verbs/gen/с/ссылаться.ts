import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ссылаться: PerfectVerb = {
  name: Word('ссылаться', 4),
  singular1stPerson: Word('ссылаюсь', 4),
  singular2ndPerson: Word('ссылаешься', 4),
  singular3rdPerson: Word('ссылается', 4),
  plural1stPerson: Word('ссылаемся', 4),
  plural2ndPerson: Word('ссылаетесь', 4),
  plural3rdPerson: Word('ссылаются', 4),
  masculinePast: Word('ссылался', 4),
  femininePast: Word('ссылалась', 4),
  neuterPast: Word('ссылалось', 4),
  pluralPast: Word('ссылались', 4),
  imperativeInformal: Word('ссылайся', 4),
  imperativeFormal: Word('ссылайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(ссылаться.name.text, ссылаться);

export { ссылаться };