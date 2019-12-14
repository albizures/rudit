import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгибаться: PerfectVerb = {
  name: Word('выгибаться', 5),
  singular1stPerson: Word('выгибаюсь', 5),
  singular2ndPerson: Word('выгибаешься', 5),
  singular3rdPerson: Word('выгибается', 5),
  plural1stPerson: Word('выгибаемся', 5),
  plural2ndPerson: Word('выгибаетесь', 5),
  plural3rdPerson: Word('выгибаются', 5),
  masculinePast: Word('выгибался', 5),
  femininePast: Word('выгибалась', 5),
  neuterPast: Word('выгибалось', 5),
  pluralPast: Word('выгибались', 5),
  imperativeInformal: Word('выгибайся', 5),
  imperativeFormal: Word('выгибайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(выгибаться.name.text, выгибаться);

export { выгибаться };