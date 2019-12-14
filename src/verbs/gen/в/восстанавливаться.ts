import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восстанавливаться: PerfectVerb = {
  name: Word('восстанавливаться', 7),
  singular1stPerson: Word('восстанавливаюсь', 7),
  singular2ndPerson: Word('восстанавливаешься', 7),
  singular3rdPerson: Word('восстанавливается', 7),
  plural1stPerson: Word('восстанавливаемся', 7),
  plural2ndPerson: Word('восстанавливаетесь', 7),
  plural3rdPerson: Word('восстанавливаются', 7),
  masculinePast: Word('восстанавливался', 7),
  femininePast: Word('восстанавливалась', 7),
  neuterPast: Word('восстанавливалось', 7),
  pluralPast: Word('восстанавливались', 7),
  imperativeInformal: Word('восстанавливайся', 7),
  imperativeFormal: Word('восстанавливайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(восстанавливаться.name.text, восстанавливаться);

export { восстанавливаться };