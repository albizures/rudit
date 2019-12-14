import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгибаться: PerfectVerb = {
  name: Word('разгибаться', 6),
  singular1stPerson: Word('разгибаюсь', 6),
  singular2ndPerson: Word('разгибаешься', 6),
  singular3rdPerson: Word('разгибается', 6),
  plural1stPerson: Word('разгибаемся', 6),
  plural2ndPerson: Word('разгибаетесь', 6),
  plural3rdPerson: Word('разгибаются', 6),
  masculinePast: Word('разгибался', 6),
  femininePast: Word('разгибалась', 6),
  neuterPast: Word('разгибалось', 6),
  pluralPast: Word('разгибались', 6),
  imperativeInformal: Word('разгибайся', 6),
  imperativeFormal: Word('разгибайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разгибаться.name.text, разгибаться);

export { разгибаться };