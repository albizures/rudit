import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const аукаться: PerfectVerb = {
  name: Word('аукаться', 1),
  singular1stPerson: Word('аукаюсь', 1),
  singular2ndPerson: Word('аукаешься', 1),
  singular3rdPerson: Word('аукается', 1),
  plural1stPerson: Word('аукаемся', 1),
  plural2ndPerson: Word('аукаетесь', 1),
  plural3rdPerson: Word('аукаются', 1),
  masculinePast: Word('аукался', 1),
  femininePast: Word('аукалась', 1),
  neuterPast: Word('аукалось', 1),
  pluralPast: Word('аукались', 1),
  imperativeInformal: Word('аукайся', 1),
  imperativeFormal: Word('аукайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(аукаться.name.text, аукаться);

export { аукаться };