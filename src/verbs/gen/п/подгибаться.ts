import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подгибаться: PerfectVerb = {
  name: Word('подгибаться', 6),
  singular1stPerson: Word('подгибаюсь', 6),
  singular2ndPerson: Word('подгибаешься', 6),
  singular3rdPerson: Word('подгибается', 6),
  plural1stPerson: Word('подгибаемся', 6),
  plural2ndPerson: Word('подгибаетесь', 6),
  plural3rdPerson: Word('подгибаются', 6),
  masculinePast: Word('подгибался', 6),
  femininePast: Word('подгибалась', 6),
  neuterPast: Word('подгибалось', 6),
  pluralPast: Word('подгибались', 6),
  imperativeInformal: Word('подгибайся', 6),
  imperativeFormal: Word('подгибайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(подгибаться.name.text, подгибаться);

export { подгибаться };