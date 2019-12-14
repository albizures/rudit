import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намыливаться: PerfectVerb = {
  name: Word('намыливаться', 3),
  singular1stPerson: Word('намыливаюсь', 3),
  singular2ndPerson: Word('намыливаешься', 3),
  singular3rdPerson: Word('намыливается', 3),
  plural1stPerson: Word('намыливаемся', 3),
  plural2ndPerson: Word('намыливаетесь', 3),
  plural3rdPerson: Word('намыливаются', 3),
  masculinePast: Word('намыливался', 3),
  femininePast: Word('намыливалась', 3),
  neuterPast: Word('намыливалось', 3),
  pluralPast: Word('намыливались', 3),
  imperativeInformal: Word('намыливайся', 3),
  imperativeFormal: Word('намыливайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(намыливаться.name.text, намыливаться);

export { намыливаться };