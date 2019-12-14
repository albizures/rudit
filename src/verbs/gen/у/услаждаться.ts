import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const услаждаться: PerfectVerb = {
  name: Word('услаждаться', 6),
  singular1stPerson: Word('услаждаюсь', 6),
  singular2ndPerson: Word('услаждаешься', 6),
  singular3rdPerson: Word('услаждается', 6),
  plural1stPerson: Word('услаждаемся', 6),
  plural2ndPerson: Word('услаждаетесь', 6),
  plural3rdPerson: Word('услаждаются', 6),
  masculinePast: Word('услаждался', 6),
  femininePast: Word('услаждалась', 6),
  neuterPast: Word('услаждалось', 6),
  pluralPast: Word('услаждались', 6),
  imperativeInformal: Word('услаждайся', 6),
  imperativeFormal: Word('услаждайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(услаждаться.name.text, услаждаться);

export { услаждаться };