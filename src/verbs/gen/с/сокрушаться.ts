import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сокрушаться: PerfectVerb = {
  name: Word('сокрушаться', 6),
  singular1stPerson: Word('сокрушаюсь', 6),
  singular2ndPerson: Word('сокрушаешься', 6),
  singular3rdPerson: Word('сокрушается', 6),
  plural1stPerson: Word('сокрушаемся', 6),
  plural2ndPerson: Word('сокрушаетесь', 6),
  plural3rdPerson: Word('сокрушаются', 6),
  masculinePast: Word('сокрушался', 6),
  femininePast: Word('сокрушалась', 6),
  neuterPast: Word('сокрушалось', 6),
  pluralPast: Word('сокрушались', 6),
  imperativeInformal: Word('сокрушайся', 6),
  imperativeFormal: Word('сокрушайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(сокрушаться.name.text, сокрушаться);

export { сокрушаться };