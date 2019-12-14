import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оскорбить: PerfectVerb = {
  name: Word('оскорбить', 6),
  singular1stPerson: Word('оскорблю', 7),
  singular2ndPerson: Word('оскорбишь', 6),
  singular3rdPerson: Word('оскорбит', 6),
  plural1stPerson: Word('оскорбим', 6),
  plural2ndPerson: Word('оскорбите', 6),
  plural3rdPerson: Word('оскорбят', 6),
  masculinePast: Word('оскорбил', 6),
  femininePast: Word('оскорбила', 6),
  neuterPast: Word('оскорбило', 6),
  pluralPast: Word('оскорбили', 6),
  imperativeInformal: Word('оскорби', 6),
  imperativeFormal: Word('оскорбите', 6),
  imperfect: ['оскорблять'],
};

perfectVerbs.set(оскорбить.name.text, оскорбить);

export { оскорбить };