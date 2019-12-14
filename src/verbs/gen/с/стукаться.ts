import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стукаться: PerfectVerb = {
  name: Word('стукаться', 2),
  singular1stPerson: Word('стукаюсь', 2),
  singular2ndPerson: Word('стукаешься', 2),
  singular3rdPerson: Word('стукается', 2),
  plural1stPerson: Word('стукаемся', 2),
  plural2ndPerson: Word('стукаетесь', 2),
  plural3rdPerson: Word('стукаются', 2),
  masculinePast: Word('стукался', 2),
  femininePast: Word('стукалась', 2),
  neuterPast: Word('стукалось', 2),
  pluralPast: Word('стукались', 2),
  imperativeInformal: Word('стукайся', 2),
  imperativeFormal: Word('стукайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(стукаться.name.text, стукаться);

export { стукаться };