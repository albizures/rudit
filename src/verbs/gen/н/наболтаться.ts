import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наболтаться: PerfectVerb = {
  name: Word('наболтаться', 6),
  singular1stPerson: Word('наболтаюсь', 6),
  singular2ndPerson: Word('наболтаешься', 6),
  singular3rdPerson: Word('наболтается', 6),
  plural1stPerson: Word('наболтаемся', 6),
  plural2ndPerson: Word('наболтаетесь', 6),
  plural3rdPerson: Word('наболтаются', 6),
  masculinePast: Word('наболтался', 6),
  femininePast: Word('наболталась', 6),
  neuterPast: Word('наболталось', 6),
  pluralPast: Word('наболтались', 6),
  imperativeInformal: Word('наболтайся', 6),
  imperativeFormal: Word('наболтайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(наболтаться.name.text, наболтаться);

export { наболтаться };