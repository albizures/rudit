import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сшибаться: PerfectVerb = {
  name: Word('сшибаться', 4),
  singular1stPerson: Word('сшибаюсь', 4),
  singular2ndPerson: Word('сшибаешься', 4),
  singular3rdPerson: Word('сшибается', 4),
  plural1stPerson: Word('сшибаемся', 4),
  plural2ndPerson: Word('сшибаетесь', 4),
  plural3rdPerson: Word('сшибаются', 4),
  masculinePast: Word('сшибался', 4),
  femininePast: Word('сшибалась', 4),
  neuterPast: Word('сшибалось', 4),
  pluralPast: Word('сшибались', 4),
  imperativeInformal: Word('сшибайся', 4),
  imperativeFormal: Word('сшибайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сшибаться.name.text, сшибаться);

export { сшибаться };