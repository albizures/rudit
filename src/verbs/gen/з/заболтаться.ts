import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заболтаться: PerfectVerb = {
  name: Word('заболтаться', 6),
  singular1stPerson: Word('заболтаюсь', 6),
  singular2ndPerson: Word('заболтаешься', 6),
  singular3rdPerson: Word('заболтается', 6),
  plural1stPerson: Word('заболтаемся', 6),
  plural2ndPerson: Word('заболтаетесь', 6),
  plural3rdPerson: Word('заболтаются', 6),
  masculinePast: Word('заболтался', 6),
  femininePast: Word('заболталась', 6),
  neuterPast: Word('заболталось', 6),
  pluralPast: Word('заболтались', 6),
  imperativeInformal: Word('заболтайся', 6),
  imperativeFormal: Word('заболтайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(заболтаться.name.text, заболтаться);

export { заболтаться };